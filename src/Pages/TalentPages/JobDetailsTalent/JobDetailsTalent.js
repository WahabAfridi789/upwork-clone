import { useParams } from "react-router";
import ClientRecentHistory from "../../../Components/TalentComponents/ClientRecentHistory/ClientRecentHistory";
import JobDescriptionJobDetails from "../../../Components/TalentComponents/JobDescriptionJobDetails/JobDescriptionJobDetails";
import RightSidebarJobDetails from "../../../Components/TalentComponents/RightSidebarJobDetails/RightSidebarJobDetails";
import OtherOpenJobsByThisClient from "../../../Components/TalentComponents/OtherOpenJobsByThisClient/OtherOpenJobsByThisClient";
import SimilarJobsOnUpwork from "./../../../Components/TalentComponents/SimilarJobsOnUpwork/SimilarJobsOnUpwork";
import { useTranslation } from "react-i18next";

export default function JobDetailsTalent() {
  const { t }= useTranslation();
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container-md container-fluid-sm my-lg-4 my-sm-4 py-xs-5">
      <div className="d-lg-block">
        <div className="row my-lg-4 px-0 mx-0 d-lg-block d-none py-xs-5">
          <h3>{t("Job details")}</h3>
        </div>
        <div className="row ">
          <JobDescriptionJobDetails />
          <RightSidebarJobDetails />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <ClientRecentHistory />
          <OtherOpenJobsByThisClient />
          <SimilarJobsOnUpwork />
        </div>
      </div>
    </div>
  );
}
