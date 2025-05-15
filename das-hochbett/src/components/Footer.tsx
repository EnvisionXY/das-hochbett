// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Das Hochbett. All rights reserved.</p>
    </footer>
  );
}
