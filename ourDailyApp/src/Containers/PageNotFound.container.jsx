import React from "react";
import {PageNotFound} from "../Components/Compound Components";
import useRouter from "../hooks/useRouter.hooks";

const PageNotFoundContainer = () => {

    const router = useRouter();

    return <PageNotFound>
        <PageNotFound.Container>

            <PageNotFound.IconAndTextGroup>
                <PageNotFound.WarningIcon className="text-center"/>
                <PageNotFound.ColGroup>
                    <PageNotFound.BigText>404</PageNotFound.BigText>
                    <PageNotFound.DescText>Page Not Found!</PageNotFound.DescText>
                </PageNotFound.ColGroup>

            </PageNotFound.IconAndTextGroup>



            <PageNotFound.Group>
                <PageNotFound.Button variant="contained" color="primary" onClick={() => {
                    router.push("/main");
                }}>Back To Main Page</PageNotFound.Button>


                {/* @planToImplement Report Problem functionality (may be report via email) */}
                <PageNotFound.Button variant="contained" color="secondary">Report this Problem</PageNotFound.Button>
            </PageNotFound.Group>

        </PageNotFound.Container>
    </PageNotFound>
}

export default PageNotFoundContainer;