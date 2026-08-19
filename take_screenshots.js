import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function main() {
  const artifactDir = 'C:\\Users\\Super User\\.gemini\\antigravity\\brain\\38698959-6d24-478c-9811-958d108c37f7';
  
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  let execPath = undefined;
  if (fs.existsSync(edgePath)) {
    execPath = edgePath;
  } else if (fs.existsSync(chromePath)) {
    execPath = chromePath;
  }

  const browser = await chromium.launch({ 
    headless: true,
    executablePath: execPath
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5
  });
  
  const page = await context.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Full page screenshot
  await page.screenshot({ path: path.join(artifactDir, 'screenshot_full.png'), fullPage: true });

  // Hero Section
  const hero = page.locator('#hero');
  await hero.screenshot({ path: path.join(artifactDir, 'screenshot_hero.png') });

  // About Section
  const about = page.locator('#about');
  await about.screenshot({ path: path.join(artifactDir, 'screenshot_about.png') });

  // Skills Section
  const skills = page.locator('#skills');
  await skills.screenshot({ path: path.join(artifactDir, 'screenshot_skills.png') });

  // Projects Section
  const projects = page.locator('#projects');
  await projects.screenshot({ path: path.join(artifactDir, 'screenshot_projects.png') });

  // Work Experience
  const expSection = page.locator('#experience');
  await expSection.screenshot({ path: path.join(artifactDir, 'screenshot_experience_work.png') });

  // Click Education & Certifications
  const eduBtn = page.getByRole('button', { name: /Education & Certs/i });
  if (await eduBtn.isVisible()) {
    await eduBtn.click();
    await page.waitForTimeout(600);
    await expSection.screenshot({ path: path.join(artifactDir, 'screenshot_experience_certs.png') });
  }

  // Testimonials Section
  const testimonials = page.locator('#testimonials');
  await testimonials.screenshot({ path: path.join(artifactDir, 'screenshot_testimonials.png') });

  // Contact Section
  const contact = page.locator('#contact');
  await contact.screenshot({ path: path.join(artifactDir, 'screenshot_contact.png') });

  console.log('ALL_SCREENSHOTS_CAPTURED_SUCCESSFULLY');
  await browser.close();
}

main().catch(console.error);
