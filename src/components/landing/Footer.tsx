const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 bg-radar-dark">
      <div className="container text-center">
        <p className="text-radar-gray-light text-sm">
          © {new Date().getFullYear()} Radar de Lançamentos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
