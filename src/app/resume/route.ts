import { personalInfo } from "@/data/portfolio";

export const dynamic = "force-static";

function escapePdfText(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function toPdfSafeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "");
}

function buildPlaceholderPdf() {
  const lines = [
    personalInfo.displayName,
    personalInfo.title,
    personalInfo.location,
    "",
    "Resume placeholder",
    "Replace this route or update personalInfo.resumeUrl with your final PDF in /public/resume.",
    "",
    "Focus: fintech, crypto, onboarding, KYC, authentication, identity, growth.",
    personalInfo.linkedinUrl,
    personalInfo.githubUrl
  ];

  const stream = [
    "BT",
    "/F1 26 Tf",
    "72 720 Td",
    ...lines.flatMap((line, index) => [
      index === 0
        ? `(${escapePdfText(toPdfSafeText(line))}) Tj`
        : `0 -28 Td (${escapePdfText(toPdfSafeText(line))}) Tj`
    ]),
    "ET"
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}

export function GET() {
  return new Response(buildPlaceholderPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="ignacio-perez-roca-resume-placeholder.pdf"'
    }
  });
}
