import type { LucideIcon } from "lucide-react";
import { Camera, Castle, Mountain, Package, Palette } from "lucide-react";

export type AspectRatio = "1:1" | "16:9" | "4:3" | "3:4" | "9:16";
export type ImageStyle = "None" | "Photorealistic" | "Digital Art" | "Illustration" | "Anime" | "Cinematic";
export type ImageQuality = "Standard" | "High";

export interface ImageGeneration {
  id: string;
  title: string;
  time: string;
  favorite: boolean;
  tone: "orange" | "blue" | "purple" | "green" | "gold";
}

export interface PromptIdea {
  title: string;
  prompt: string;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green" | "gold";
}

export const imageHistory: ImageGeneration[] = [
  { id: "mountain", title: "Mountain cabin at sunrise", time: "Today, 10:32 AM", favorite: true, tone: "blue" },
  { id: "product", title: "Minimal product photography", time: "Yesterday", favorite: false, tone: "orange" },
  { id: "character", title: "Character concept sketch", time: "Monday", favorite: true, tone: "purple" },
  { id: "poster", title: "Modern event poster", time: "Sep 22", favorite: false, tone: "gold" },
  { id: "forest", title: "Enchanted forest path", time: "Sep 19", favorite: false, tone: "green" },
];

export const promptIdeas: PromptIdea[] = [
  { title: "Product photography", prompt: "A premium wireless headphone product photo on a clean studio surface", icon: Camera, tone: "orange" },
  { title: "Fantasy landscape", prompt: "A vast fantasy landscape with floating islands and a golden sunset", icon: Mountain, tone: "blue" },
  { title: "Minimal poster", prompt: "A minimal editorial poster for a contemporary design exhibition", icon: Palette, tone: "purple" },
  { title: "Character concept", prompt: "A thoughtful explorer character in a futuristic city, concept art", icon: Castle, tone: "green" },
  { title: "Logo concept", prompt: "A clean geometric logo concept for a creative technology studio", icon: Package, tone: "gold" },
];

export const aspectRatios: AspectRatio[] = ["1:1", "16:9", "4:3", "3:4", "9:16"];
export const styles: ImageStyle[] = ["None", "Photorealistic", "Digital Art", "Illustration", "Anime", "Cinematic"];
export const qualities: ImageQuality[] = ["Standard", "High"];
export const resolutions = ["512 × 512", "768 × 768", "1024 × 1024"];