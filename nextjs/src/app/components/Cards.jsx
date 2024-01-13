
const burguers = [
    {
      item: 1,
      title: 'Hamburguesa Clasica',
      description: 'Una hamburguesa clasica con el mejor pan de la ciudad.',
      price: '3000'
    },
    {
      item: 2,
      title: 'Hamburguesa Completa',
      description: 'Una hamburguesa completa, lechuga, tomate, jamon y queso.',
      price: '4500'
    }
  ];


  function Cards() {
    return (
      <div>
        {burguers.map((burger) => (
          <section className="flex border border-black py-5 " key={burger.item}>
            <div className="mx-4 border border-black py-7">
              <h1>{burger.title}</h1>
              <p>{burger.description}</p>
              <button>{burger.price}</button>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </section>
        ))}
      </div>
    );
  }
  
  export default Cards;