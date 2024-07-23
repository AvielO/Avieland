import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResources } from "../../slices/resourcesSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";
import { toast } from "react-toastify";
import BankItem from "../../components/BankItem/BankItem";

const BankPage = () => {
  const username = useSelector((state) => state.user.username);
  const { copper, silver, gold } = useSelector((state) => state.resources);
  const [bankResources, setBankResources] = useState({
    copper: 0,
    silver: 0,
    gold: 0,
  });
  const dispatch = useDispatch();

  const copperDepRef = useRef();
  const copperWithRef = useRef();

  const silverDepRef = useRef();
  const silverWithRef = useRef();

  const goldDepRef = useRef();
  const goldWithRef = useRef();

  useEffect(() => {
    const getBankResources = async () => {
      const { bank: bankResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/users/${username}/bank`,
      );
      setBankResources(bankResources);
    };

    getBankResources();
  }, []);

  const handleDeposit = async (e, resourceName) => {
    e.preventDefault();
    try {
      const { updatedResources, updatedBankResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/bank/${username}/deposit`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            resourceName,
            copperToDeposit: copperDepRef.current.value,
            silverToDeposit: silverDepRef.current.value,
            goldToDeposit: goldDepRef.current.value,
          }),
        },
      );
      dispatch(updateResources(updatedResources));
      setBankResources(updatedBankResources);
      toast.success("!הפקדת המשאבים הסתיימה בהצלחה");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleWithdraw = async (e, resourceName) => {
    e.preventDefault();

    try {
      const { updatedResources, updatedBankResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/bank/${username}/withdraw`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            resourceName,
            copperToWithdraw: copperWithRef.current.value,
            silverToWithdraw: silverWithRef.current.value,
            goldToWithdraw: goldWithRef.current.value,
          }),
        },
      );
      dispatch(updateResources(updatedResources));
      setBankResources(updatedBankResources);
      toast.success("!משיכת המשאבים הסתיימה בהצלחה");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-24">
      <BankItem
        name={"copper"}
        pictureURL={"/resources-icons/copper-icon.png"}
        currency={copper}
        bankCurrency={bankResources.copper}
        depRef={copperDepRef}
        withRef={copperWithRef}
        handleDeposit={handleDeposit}
        handleWithdraw={handleWithdraw}
        key={"cooperBank"}
      />

      <BankItem
        name={"silver"}
        pictureURL={"/resources-icons/silver-icon.png"}
        currency={silver}
        bankCurrency={bankResources.silver}
        depRef={silverDepRef}
        withRef={silverWithRef}
        handleDeposit={handleDeposit}
        handleWithdraw={handleWithdraw}
        key={"silverBank"}
      />

      <BankItem
        name={"gold"}
        pictureURL={"/resources-icons/gold-icon.png"}
        currency={gold}
        bankCurrency={bankResources.gold}
        depRef={goldDepRef}
        withRef={goldWithRef}
        handleDeposit={handleDeposit}
        handleWithdraw={handleWithdraw}
        key={"goldBank"}
      />
    </div>
  );
};

export default BankPage;
