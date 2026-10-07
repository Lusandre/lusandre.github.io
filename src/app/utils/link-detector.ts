export interface DetectedLinkInfo {
  type: string;
  icon: string;
  svgIcon?: string;
  defaultLabel: string;
}

export function detectLinkInfo(rawUrl: string): DetectedLinkInfo {
  if (!rawUrl) {
    return { type: 'other', icon: 'link', defaultLabel: 'Enlace' };
  }

  const url = rawUrl.toLowerCase().trim();

  if (url.includes('github.com')) {
    return { type: 'github', icon: 'code', svgIcon: 'github', defaultLabel: 'GitHub' };
  }
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return { type: 'youtube', icon: 'smart_display', defaultLabel: 'YouTube' };
  }
  if (url.includes('figma.com')) {
    return { type: 'figma', icon: 'palette', defaultLabel: 'Figma' };
  }
  if (url.includes('gitlab.com')) {
    return { type: 'gitlab', icon: 'code', defaultLabel: 'GitLab' };
  }
  if (url.includes('linkedin.com')) {
    return { type: 'linkedin', icon: 'person', svgIcon: 'linkedin', defaultLabel: 'LinkedIn' };
  }
  if (url.includes('npmjs.com')) {
    return { type: 'npm', icon: 'inventory_2', defaultLabel: 'NPM Package' };
  }
  if (url.includes('play.google.com') || url.includes('apps.apple.com')) {
    return { type: 'appstore', icon: 'phone_iphone', defaultLabel: 'App Móvil' };
  }
  if (
    url.includes('notion.site') ||
    url.includes('docs.') ||
    url.includes('gitbook.io') ||
    url.endsWith('.pdf')
  ) {
    return { type: 'docs', icon: 'description', defaultLabel: 'Docs' };
  }

  return { type: 'live', icon: 'launch', defaultLabel: 'Demo Web' };
}
