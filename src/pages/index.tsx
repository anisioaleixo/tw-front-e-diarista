import type { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "ui/components/UserInformation/UserInformation";
const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preença seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Anisio Aleixo"}
        picture={"https://github.com/anisioaleixo.png"}
        rating={4}
      />
    </div>
  );
};

export default Home;
