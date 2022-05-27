import React from 'react';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import CenterSectionWithCard from "./ui/CenterSectionWithCard";
import {CardProfessional} from "./ProfessionalTeams";
import img1 from "../access/unsplash_pTrhfmj2jDA.png";
import img2 from "../access/unsplash_FVh_yqLR9eA.png";
import img3 from "../access/unsplash_mEZ3PoFGs_k.png";

function OurTeam() {
    return (
        <ContainerWithPadding>
            <CenterSectionWithCard
                title="Our Team"
                slogan="We are Professional"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
            >
                <CardProfessional img={img1} field="Surgeon" name="Briyan Nevalli"
                                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
                <CardProfessional active={Boolean(true)} img={img2} field="Dermatologist" name="Bella sebastian"
                                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
                <CardProfessional img={img3} field="Stylist expert" name="Lilly Adams"
                                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
            </CenterSectionWithCard>
        </ContainerWithPadding>
    );
}

export default OurTeam;