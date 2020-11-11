import React from "react";
import {PageNotFound} from "../Components/Compound Components";
import useRouter from "../hooks/useRouter.hooks";

const SuccessFailContainer = ({bigText, descText}) => {

    const router = useRouter();

    return <PageNotFound>
        <PageNotFound.Container>

            <PageNotFound.IconAndTextGroup>
                <PageNotFound.WarningIcon className="text-center"/>
                <PageNotFound.ColGroup>
                    <PageNotFound.BigText>{bigText}</PageNotFound.BigText>
                    <PageNotFound.DescText>{descText}</PageNotFound.DescText>
                </PageNotFound.ColGroup>

            </PageNotFound.IconAndTextGroup>



            <PageNotFound.Group>
                <PageNotFound.Button variant="contained" color="primary" onClick={() => {
                    router.push("/cart");
                }}>Back To Cart</PageNotFound.Button>


                {/* @planToImplement Report Problem functionality (may be report via email) */}
                <PageNotFound.Button variant="contained" color="secondary">Report this Problem</PageNotFound.Button>
            </PageNotFound.Group>

        </PageNotFound.Container>
    </PageNotFound>
}

export default SuccessFailContainer;