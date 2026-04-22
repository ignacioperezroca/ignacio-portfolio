import { personalInfo } from "@/data/portfolio";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET(request: Request) {
  return NextResponse.redirect(new URL(personalInfo.resumeUrl, request.url), 307);
}
