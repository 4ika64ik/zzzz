import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';
import { Link } from 'react-router-dom';
import { video1, video2 } from '../assets/images/index';

const PopularProducts = () => {
  const sectionStyle = {
    maxWidth: '1200px',
    marginTop: '3rem',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Центрируем содержимое
    gap: '20px', // Добавляем пространство между элементами
  };

  // Стили для заголовка с дополнительными отступами
  const headingStyle = {
    fontSize: '40px',
    lineHeight: '40px',
    fontWeight: 'bold',
    color: '#0077cc',
    textAlign: 'center', // Центрируем текст заголовка
    margin: '0 0 20px 0', // Добавляем отступ снизу
  };

  // Улучшенные стили для видео
  const videoStyle = {
    width: '85%', // Устанавливаем ширину видео в процентах от ширины родительского контейнера
    maxHeight: '500px', // Устанавливаем максимальную высоту, чтобы видео не стало слишком большим на больших экранах
    objectFit: 'cover', // Обеспечиваем покрытие всей области видео без потери соотношения сторон
    borderRadius: '10px', // Скругляем углы
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Добавляем тень для визуального "поднятия" видео
    border: 'none', // Убираем рамку
    margin: '20px 0', // Добавляем вертикальные отступы
  };
  
  // Для центрирования видео в родительском контейнере
  const videoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%', // Занимаем 100% ширины родительского элемента
    padding: '0 15%', // Добавляем отступы по бокам, чтобы создать пространство как в Telegram
  };
  

  // Стили для контейнера с видео и другими элементами
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
    width: '100%', // Задаём ширину на 100%, чтобы использовать всё доступное пространство
    marginTop: '2rem', // Добавляем отступ сверху
  };

  const linkStyle = {
    backgroundColor: '#0077cc',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '30px', // Больше скругление для кнопки
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    marginTop: '2rem', // Добавляем отступ сверху
    width: 'fit-content', // Автоматический размер по содержимому
  };

  return (
    <section id='country' style={sectionStyle}>
      <div className='flex flex-col justify-start gap-5'>
        <h2 style={headingStyle}>
          Что о нас <span style={{ color: '#0077cc' }}>говорят</span> люди
        </h2>
        <iframe
          style={videoStyle}
          src="https://www.youtube.com/embed/lY8eaeCcEn8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className='mt-2 font-montserrat text-slate-gray'>
          Мы гордимся тем, что все наши клиенты остаются довольными результатами наших услуг...
        </p>
        {/* Воспроизведение локального видео video1 */}
       {/* Воспроизведение локального видео video1 */}
<div style={videoContainerStyle}>
  <video style={videoStyle} controls>
    <source src={video1} type="video/mp4" />
    Ваш браузер не поддерживает элемент video.
  </video>
</div>
{/* Воспроизведение локального видео video2 */}
<div style={videoContainerStyle}>
  <video style={videoStyle} controls>
    <source src={video2} type="video/mp4" />
    Ваш браузер не поддерживает элемент video.
  </video>
</div>
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
