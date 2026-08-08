/* Brand SVGs — lucide-react intentionally excludes brand/logo icons */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookSVGIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/once_upon_a_time_by_ruvani/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.facebook.com/share/1EeMPewn3v/", label: "Facebook", Icon: FacebookSVGIcon },
  { href: "https://wa.me/61425790079", label: "WhatsApp", Icon: WhatsAppIcon },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-beige-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-8 py-12 md:px-12 md:py-16">
        
        {/* WhatsApp direct contact button */}
        <a
          href="https://wa.me/61425790079"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-espresso/20 bg-cream/70 px-6 py-3 font-body text-[0.7rem] uppercase tracking-[0.25em] text-espresso transition-all duration-300 hover:border-wicker hover:bg-cream hover:shadow-md"
          aria-label="Connect on WhatsApp"
        >
          <WhatsAppIcon className="h-4 w-4 text-wicker" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Social Icons */}
        <ul className="flex items-center gap-6">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/60 transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-body text-xs text-muted" suppressHydrationWarning>
          &copy; {year} Once Upon a Time Photography
        </p>
        <p className="mt-2 font-body text-[0.65rem] uppercase tracking-[0.25em] text-muted/60">
          Designed and developed by Clouvent
        </p>
      </div>
    </footer>
  );
}
