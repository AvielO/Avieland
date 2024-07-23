const resourceTranslation = {
  copper: "נחושת",
  silver: "כסף",
  gold: "זהב",
  diamond: "יהלום",
};

const BankItem = ({
  name,
  pictureURL,
  currency,
  bankCurrency,
  depRef,
  withRef,
  handleDeposit,
  handleWithdraw,
}) => {
  return (
    <section className="flex w-2/3 flex-col items-center gap-6 rounded-3xl bg-sky-300 py-4">
      <div className="-mt-14 rounded-full bg-white p-4">
        <img
          className="h-16 w-16"
          src={pictureURL}
          alt={`${name}}-resource-icon`}
        />
      </div>

      <div className="flex w-full justify-around">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-semibold">
            יתרה להפקדה: {currency}
          </span>
          <input
            className="w-2/3 rounded-full bg-white p-2 text-center"
            ref={depRef}
          />
          <button
            onClick={(e) => handleDeposit(e, name)}
            className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
          >
            הפקד {resourceTranslation[name]}
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-semibold">
            יתרה למשיכה: {bankCurrency}
          </span>
          <input
            className="w-2/3 rounded-full bg-white p-2 text-center"
            ref={withRef}
          />
          <button
            onClick={(e) => handleWithdraw(e, name)}
            className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
          >
            משוך {resourceTranslation[name]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BankItem;
