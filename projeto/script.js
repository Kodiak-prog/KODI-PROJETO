const redes = [
    {
        url:"https://wa.me/5591993636933",
        classe:"whatsapp",
        icone:"fab fa-whatsapp"
    },
    {
    url:"https://www.facebook.com/?locale=pt_BR",
    classe: "Facebook",
    icone:"fab fa-facebook-f"
    },
    
    {
        url:"https://r.search.yahoo.com/_ylt=AwrFQQVFESVo16UMxBEf7At.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1747288517/RO=10/RU=https%3a%2f%2fwww.instagram.com%2ferikk_senna%2f/RK=2/RS=56tzHQTYgcbdu7XZDyCniZMo3Ck-",
        classe:"Instagram",
        icone:"fab fa-instagram"
    }
];
const container = document.createElement
('div'); 
container.className = 'botoes-flutuantes';

redes.forEach(rede => {
    const a = document.createElement('a');
    a.href = rede.url;
    a.target = "_blank";
    a.className = rede.classe;

    const icon = document.createElement('i');
    icon.className = rede.icone;

    a.appendChild(icon);
    container.appendChild(a);
});

document.body.appendChild(container);