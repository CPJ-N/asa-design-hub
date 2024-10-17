// src/components/Footer.tsx
export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Arpit Singh Ahluwalia. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/arpitahluwalia/" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://www.instagram.com/spartacau5" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Dribbble</a>
          </div>
        </div>
      </footer>
    );
}