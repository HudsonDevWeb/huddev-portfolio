export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Hudson Moreira. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Desenvolvido com <span className="text-foreground">♥</span> e muito
          café
        </p>
      </div>
    </footer>
  );
}