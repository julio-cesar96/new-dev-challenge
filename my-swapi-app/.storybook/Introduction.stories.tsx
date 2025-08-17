import type { Meta } from '@storybook/react';

const Introduction = () => (
  <div style={{ 
    padding: '2rem', 
    maxWidth: '1200px', 
    lineHeight: '1.6',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }}>
    <h1 style={{ 
      color: '#333', 
      borderBottom: '3px solid #007bff', 
      paddingBottom: '1rem',
      marginBottom: '2rem'
    }}>
      Star Wars Universe Explorer - Design System
    </h1>
    
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '1.5rem', 
      borderRadius: '8px', 
      marginBottom: '2rem',
      border: '1px solid #e9ecef'
    }}>
      <p><strong>Bem-vindo ao Storybook do projeto Star Wars Universe Explorer!</strong></p>
      <p>Este Design System foi desenvolvido utilizando o <strong>Composition Pattern</strong>, uma abordagem arquitetural que prioriza a flexibilidade, reutilização e manutenibilidade através da composição de componentes menores e especializados.</p>
    </div>
    
    <h2 style={{ color: '#007bff', marginTop: '2rem' }}>🎯 A Abordagem: Composition Pattern</h2>
    
    <h3>O que é o Composition Pattern?</h3>
    <p>O Composition Pattern é um padrão de design que permite criar componentes complexos através da combinação de componentes mais simples e especializados. Em vez de criar componentes monolíticos com muitas propriedades, criamos componentes que podem ser compostos de forma flexível.</p>
    
    <h3>Por que escolhi esta abordagem?</h3>
    
    <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
      <div style={{ 
        backgroundColor: '#e8f5e8', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '1px solid #d4edda' 
      }}>
        <h4 style={{ color: '#155724', margin: '0 0 1rem 0' }}>✅ Flexibilidade Máxima</h4>
        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
          <code style={{ color: '#dc3545' }}>
            {`// ❌ Abordagem tradicional - limitada
<Card title="Título" content="Conteúdo" footer="Rodapé" />`}
          </code>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px' }}>
          <code style={{ color: '#28a745' }}>
            {`// ✅ Composition Pattern - flexível
<Card>
  <Card.Header>
    <Typography.H2>Título Customizado</Typography.H2>
    <Button size="small">Ação</Button>
  </Card.Header>
  <Card.Body>
    <Typography.Body>Conteúdo rico</Typography.Body>
  </Card.Body>
</Card>`}
          </code>
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: '#e3f2fd', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '1px solid #bbdefb' 
      }}>
        <h4 style={{ color: '#1976d2', margin: '0 0 1rem 0' }}>🔄 Reutilização Inteligente</h4>
        <p>Os subcomponentes podem ser usados independentemente:</p>
        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px' }}>
          <code>
            {`<Card.Body>
  <Typography.Body>Conteúdo sem header</Typography.Body>
</Card.Body>`}
          </code>
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: '#fff3e0', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '1px solid #ffcc02' 
      }}>
        <h4 style={{ color: '#f57c00', margin: '0 0 1rem 0' }}>🛠️ Manutenibilidade Superior</h4>
        <p>Cada subcomponente tem uma responsabilidade específica, facilitando:</p>
        <ul>
          <li>Debug e correções</li>
          <li>Adição de novas funcionalidades</li>
          <li>Testes unitários</li>
          <li>Documentação</li>
        </ul>
      </div>
    </div>
    
    <h2 style={{ color: '#007bff', marginTop: '2rem' }}>🧩 Componentes Desenvolvidos</h2>
    
    <h3>Componentes Base (Shared)</h3>
    
    <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
      {[
        {
          name: 'Button',
          subComponents: ['Button.LeftIcon', 'Button.RightIcon', 'Button.Text'],
          description: 'Botões flexíveis com ícones e texto compostos'
        },
        {
          name: 'Card',
          subComponents: ['Card.Header', 'Card.Body', 'Card.Footer'],
          description: 'Containers estruturados com seções bem definidas'
        },
        {
          name: 'Container',
          subComponents: ['Container.Item', 'Container.FlexItem'],
          description: 'Sistema de layout flexível e responsivo'
        },
        {
          name: 'Loader',
          subComponents: ['Loader.Spinner', 'Loader.Dots', 'Loader.Bar', 'Loader.Text', 'Loader.Overlay'],
          description: 'Estados de carregamento variados e compostos'
        },
        {
          name: 'Stack',
          subComponents: ['Stack.Item', 'Stack.Divider', 'Stack.Spacer'],
          description: 'Organização vertical/horizontal com divisores'
        },
        {
          name: 'Typography',
          subComponents: ['Typography.H1', 'Typography.H2', 'Typography.H3', 'Typography.Body', 'Typography.Caption'],
          description: 'Sistema tipográfico consistente e semântico'
        }
      ].map((component, index) => (
        <div key={index} style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '6px', 
          border: '1px solid #e9ecef' 
        }}>
          <h4 style={{ color: '#495057', margin: '0 0 0.5rem 0' }}>{component.name}</h4>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>{component.description}</p>
          <div style={{ fontSize: '0.8rem' }}>
            <strong>Subcomponentes:</strong> {component.subComponents.join(', ')}
          </div>
        </div>
      ))}
    </div>
    
    <h3>Componentes Específicos</h3>
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '1rem', 
      borderRadius: '6px', 
      border: '1px solid #e9ecef',
      marginTop: '1rem' 
    }}>
      <p><strong>CategoryCard & ItemCard:</strong> Componentes especializados que utilizam os componentes base para criar interfaces específicas da aplicação Star Wars.</p>
    </div>
    
    <h2 style={{ color: '#007bff', marginTop: '2rem' }}>🚀 Vantagens da Abordagem</h2>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
      {[
        { title: 'Flexibilidade sem Complexidade', desc: 'Componentes simples que se combinam de forma poderosa' },
        { title: 'Consistência Visual', desc: 'Design tokens centralizados e padrões visuais consistentes' },
        { title: 'Developer Experience Superior', desc: 'IntelliSense completo e componentes auto-documentados' },
        { title: 'Escalabilidade', desc: 'Novos subcomponentes podem ser adicionados facilmente' },
        { title: 'Testabilidade', desc: 'Cada subcomponente pode ser testado isoladamente' }
      ].map((advantage, index) => (
        <div key={index} style={{ 
          backgroundColor: '#e8f5e8', 
          padding: '1rem', 
          borderRadius: '6px', 
          border: '1px solid #d4edda' 
        }}>
          <h4 style={{ color: '#155724', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{advantage.title}</h4>
          <p style={{ margin: '0', fontSize: '0.9rem', color: '#155724' }}>{advantage.desc}</p>
        </div>
      ))}
    </div>
    
    <h2 style={{ color: '#007bff', marginTop: '2rem' }}>📖 Como usar este Storybook</h2>
    
    <div style={{ 
      backgroundColor: '#e3f2fd', 
      padding: '1.5rem', 
      borderRadius: '8px', 
      border: '1px solid #bbdefb',
      marginTop: '1rem' 
    }}>
      <ul>
        <li><strong>Documentar:</strong> Cada componente possui exemplos visuais de todas as suas variações</li>
        <li><strong>Desenvolver:</strong> Desenvolvimento isolado garantindo consistência e qualidade</li>
        <li><strong>Testar:</strong> Testes visuais e de interação em diferentes cenários</li>
        <li><strong>Compor:</strong> Veja como os componentes se combinam para criar interfaces complexas</li>
      </ul>
      
      <p style={{ margin: '1rem 0 0 0' }}>
        <strong>Navegue pela barra lateral</strong> para explorar os componentes <code>shared</code> (reutilizáveis) e <code>ui</code> (específicos da aplicação).
      </p>
    </div>
    
    <div style={{ 
      backgroundColor: '#fff9c4', 
      padding: '1.5rem', 
      borderRadius: '8px', 
      border: '1px solid #fff176',
      marginTop: '2rem',
      textAlign: 'center'
    }}>
      <h3 style={{ color: '#f57c00', margin: '0 0 1rem 0' }}>🎨 Design System Composition Pattern</h3>
      <p style={{ margin: '0', fontStyle: 'italic' }}>
        "Flexibilidade sem sacrificar a simplicidade. Reutilização inteligente e eficiente. 
        Manutenibilidade superior através de responsabilidades claras."
      </p>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Introdução',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const Default = {
  render: () => <Introduction />,
};