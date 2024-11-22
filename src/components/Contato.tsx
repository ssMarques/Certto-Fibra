import React, { useState } from 'react';
import "../styles/contato.css";


export function Contato() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!content) {
      setError('Por favor, insira uma mensagem.');
      return;
    }

    setError('');
    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch('/api/function-2', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExMzcyNzQwNzI4NDY0MTY4OTkzIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJzc21hcnF1ZXNAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWDNtUFB3Qy1BREotRGoyekJONm5NQSIsIm5iZiI6MTczMjMwODQwOCwiaWF0IjoxNzMyMzA4NzA4LCJleHAiOjE3MzIzMTIzMDgsImp0aSI6ImM3YjY4ODJhNjAzOTVkYjRmMmE0MThiYTI4ZTJkYmI5M2MwODI0NDIifQ.bz_z2SiTgvqryQybw9YAB9CUbXQHYFogdB5QsysOgApxZOvc35KpCur23KEbevZzYiMSntW1APrFc2_6ymW-gYZwXh8TdtXvrR-pEg-hfBxQ8kK-w3ZiST9O1oUDX34a8qkylb0Kc617Xl_TrPTeiwrjIdofcCfEm59MV-SDldv2vFsiKaz0b37CjNWk49mB__q-FG4gsqxvy2bqItDsNmRSQpHgWRRA3LGq1_EcFqQ3a9u3_M9YFtAKHQNUPXTYUASQKTqK_B1-gWzsJBC4wdYBB5wtlBwJCQYbJ6Y2x4QmvthLCOURqV6vuPcR7VrLeBU8TunDnny_aub4lmefRg`,
        },
        body: JSON.stringify({ toMail: email, content }),
      });

      if (response.ok) {
        setSuccessMessage('E-mail enviado com sucesso!');
        setEmail('');
        setContent('');
      } else {
        const errorData = await response.json();
        setError(`Erro ao enviar e-mail: ${errorData.message || response.statusText}`);
      }
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      setError('Erro ao enviar e-mail. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section id='contact' className="contato-section">
      <h1>Envie sua dúvida</h1>
      <h2>Entre em Contato</h2>
      <p>
    Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, 
    uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder. 😊
  </p>
      <form onSubmit={handleSubmit} className="contato-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor E-mail"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Motivo do contato. EX: Gostei muito do produto X, poderia me enviar um orçamento?"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </section>
  );
}