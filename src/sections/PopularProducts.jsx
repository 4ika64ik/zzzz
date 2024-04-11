import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';
import { Link } from 'react-router-dom';
import { video1, video2 } from '../assets/images/index';
import { render } from 'react-dom';

const PopularProducts = () => {
  const sectionStyle = {
    maxWidth: '1200px',
    marginTop: '3rem',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  const headingStyle = {
    fontSize: '40px',
    lineHeight: '40px',
    fontWeight: 'bold',
    color: '#0077cc',
    textAlign: 'center',
    margin: '0 0 20px 0',
  };

  const videoStyle = {
    width: '85%',
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 25px rgba(0, 77, 255, 0.5)', // Добавленная синяя тень
    border: 'none',
    margin: '20px 0',
  };
  
  const videoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Добавлено для центрирования кастомной кнопки плей, если будет использоваться
    width: '100%',
    padding: '0 15%',
    position: 'relative', // Добавлено для позиционирования кастомной кнопки плей
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
    width: '100%',
    marginTop: '2rem',
  };

  const linkStyle = {
    backgroundColor: '#0077cc',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    marginTop: '2rem',
    width: 'fit-content',
  };

  const textStyle = {
    fontSize: '18px', // Увеличиваем размер шрифта для лучшей читабельности
    lineHeight: '1.6', // Увеличиваем межстрочный интервал для лучшей читабельности
    color: '#333', // Изменяем цвет текста на более тёмный оттенок для контраста
    padding: '0 20px', // Добавляем отступы сбоку для создания воздуха вокруг текста
    textAlign: 'justify', // Выравниваем текст по ширине для более аккуратного вида
    marginBottom: '20px', // Добавляем нижний отступ для разделения текста и видео
    fontFamily: 'Arial, sans-serif', // Задаём шрифт, можно изменить на ваш вкус
  };

  const colot = {
    color: 'red',
    fontSize: '25px',
  };

  return (
    <section id='country' style={sectionStyle}>
      <div className='flex flex-col justify-start gap-5'>
        <h2 style={headingStyle}>
          Что о нас <span style={{ color: '#0077cc' }}>говорят</span> люди
        </h2>
        
        <p className='mt-2 font-montserrat text-slate-gray'>
  Иван Ургант - о проекте
</p>
        {/* Воспроизведение локального видео video1 */}
       {/* Воспроизведение локального видео video1 */}

<div style={videoContainerStyle}>
  <video style={videoStyle} controls autoPlay muted loop>
    <source src={video1} type="video/mp4" />
    Ваш браузер не поддерживает элемент video.
  </video>
</div>
<p className='mt-2 font-montserrat text-slate-gray'>
  Юрий Дудь - о проекте
</p>
{/* Воспроизведение локального видео video2 */}
<div style={videoContainerStyle}>
  <video style={videoStyle} controls autoPlay muted loop>
    <source src={video2} type="video/mp4" />
    Ваш браузер не поддерживает элемент video.
  </video>
  
</div>
<p className='mt-2 font-montserrat text-slate-gray'><span style={colot}>Не упустите</span> - свой шанс на беззаботный переезд и блестящее будущее. Присоединяйтесь к сотням довольных клиентов, которые уже воспользовались нашими услугами. Ваша новая жизнь начинается здесь и сейчас.</p>
        <div style={gridContainerStyle}>
          {/* Здесь могут быть другие элементы, например, карточки продуктов */}
        </div>
      </div>
      <Link to="/vnzh" style={linkStyle}>
        Страны для получения
      </Link>
    </section>
  );
};

export default PopularProducts;
