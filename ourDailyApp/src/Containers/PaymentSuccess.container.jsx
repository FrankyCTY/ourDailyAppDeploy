import React from "react";
import {PageNotFound} from "../Components/Compound Components";
import useRouter from "../hooks/useRouter.hooks";

const PaymentSuccessContainer = ({bigText, descText}) => {

    const router = useRouter();

    return <PageNotFound>
        <PageNotFound.Container>

            <PageNotFound.IconAndTextGroup>
                <PageNotFound.SuccessIcon className="text-center"/>
                <PageNotFound.ColGroup>
                    <PageNotFound.BigText>{bigText}</PageNotFound.BigText>
                    <PageNotFound.DescText>{descText}</PageNotFound.DescText>
                </PageNotFound.ColGroup>

            </PageNotFound.IconAndTextGroup>

            <PageNotFound.Group>
                <PageNotFound.Button variant="contained" color="primary" onClick={() => {
                    router.push("/main");
                }}>Back To Main</PageNotFound.Button>
            </PageNotFound.Group>

        </PageNotFound.Container>
    </PageNotFound>
}

export default PaymentSuccessContainer;