const Acerca = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center gap-6 z-20 flex-wrap">

      {/* Tarjeta 2 */}
      <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl z-30">
        <img
          src="/public/grafica2.png"
          alt="Gráfica 1"
          className="mx-4 -mt-6 h-40 rounded-xl object-cover shadow-lg"
        />
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Gráfica 1
          </h5>
          <p className="text-base font-light leading-relaxed text-gray-700">
            Esta gráfica muestra los resultados del primer experimento realizado.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            type="button"
            className="rounded-lg bg-yellow-600 py-3 px-6 text-xs font-bold uppercase text-white shadow-md hover:bg-yellow-700"
          >
            Ver más
          </button>
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl z-30">
        <img
          src="/public/grafica1.png"
          alt="Gráfica 2"
          className="mx-4 -mt-6 h-40 rounded-xl object-cover shadow-lg"
        />
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Gráfica 2
          </h5>
          <p className="text-base font-light leading-relaxed text-gray-700">
            Comparación de resultados entre métodos tradicionales y nuevos.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            type="button"
            className="rounded-lg bg-yellow-600 py-3 px-6 text-xs font-bold uppercase text-white shadow-md hover:bg-yellow-700"
          >
            Ver más
          </button>
        </div>
      </div>

      {/* Tarjeta 4 */}
      <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl z-30">
        <img
          src="/public/grafica3.png"
          alt="Gráfica 3"
          className="mx-4 -mt-6 h-40 rounded-xl object-cover shadow-lg"
        />
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Gráfica 3
          </h5>
          <p className="text-base font-light leading-relaxed text-gray-700">
            Tendencias de rendimiento durante la última semana.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            type="button"
            className="rounded-lg bg-yellow-600 py-3 px-6 text-xs font-bold uppercase text-white shadow-md hover:bg-yellow-700"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acerca;