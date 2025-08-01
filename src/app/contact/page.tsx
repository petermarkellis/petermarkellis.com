export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Peter Mark Ellis for design and development projects. Available for freelance work and collaborations.',
  openGraph: {
    title: 'Contact | Peter Mark Ellis',
    description: 'Get in touch for design and development projects. Available for freelance work and collaborations.',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen p-8 bg-yellow-50">
      <h1 className="text-8xl font-bold uppercase">Contact Page</h1>
      
      <div className="mt-16 max-w-2xl">
        <div className="flex flex-col space-y-8">
          <p className="text-3xl leading-relaxed">
            Got a project or creative idea in mind. Want to see your idea or product as a real interactive prototype? Get in touch and we can discuss your idea and help make it real.
          </p>
          
          <p className="text-5xl">
            hello@petermarkellis
          </p>
        </div>
      </div>
    </div>
  );
} 