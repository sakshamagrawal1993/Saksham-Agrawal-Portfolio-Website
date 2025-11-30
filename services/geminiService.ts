import { GoogleGenAI } from "@google/genai";
import { PROFILE_DATA, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, AWARDS } from '../data/profile';

// Construct a system instruction based on the profile data
const constructSystemInstruction = (): string => {
  const skillsStr = SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ');
  const experienceStr = EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n');
  const projectsStr = PROJECTS.map(p => `${p.title}: ${p.description} (Stack: ${p.techStack.join(', ')})`).join('\n');
  const educationStr = EDUCATION.map(e => `${e.degree} from ${e.institution} (${e.period})`).join('\n');
  const awardsStr = AWARDS.map(a => `${a.title}: ${a.description}`).join('\n');

  return `
    You are an AI assistant for ${PROFILE_DATA.name}'s professional portfolio website.
    Your goal is to answer questions about ${PROFILE_DATA.name} based on the following context.
    
    About: ${PROFILE_DATA.about}
    Title: ${PROFILE_DATA.title}
    Location: ${PROFILE_DATA.location}
    
    Skills:
    ${skillsStr}
    
    Experience:
    ${experienceStr}
    
    Projects:
    ${projectsStr}

    Education:
    ${educationStr}

    Awards:
    ${awardsStr}
    
    Tone: Professional, knowledgeable, and concise.
    If asked about contact info, provide: ${PROFILE_DATA.email} or refer to the LinkedIn link.
    If asked something not in the context, politely say you don't have that information but suggest contacting ${PROFILE_DATA.name} directly.
    Highlight his expertise in Product Management, AI, and Fintech.
  `;
};

let aiClient: GoogleGenAI | null = null;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, but the API key is not configured. Please add the API_KEY to the environment variables to chat with me.";
  }

  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  try {
    const model = aiClient.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: constructSystemInstruction(),
      }
    });
    
    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};