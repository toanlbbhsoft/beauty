import React from 'react';
import CenterSectionWithComponent from "./ui/CenterSectionWithComponent";

import img1 from '../access/team/unsplash_byGTytEGjBo.png';
import img2 from '../access/team/unsplash_8YG31Xn4dSw.png';
import img3 from '../access/team/unsplash_Fsgzm8N0hIY.png';

import Profile from "./Profile";

function AssistanceTeam(props) {
    return (
        <CenterSectionWithComponent
            title="Assistance Team"
            slogan="Meet the pro assistance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        >
            <Profile marginBottom="7.9rem" img={img1} name="Lina Gustav" job="Pharmacist"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."/>
            <Profile marginBottom="7.9rem" img={img2} name="Adam White" job="Finance"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."/>
            <Profile img={img3} name="Jane Doe" job="Marketer"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."/>
        </CenterSectionWithComponent>
    );
}

export default AssistanceTeam;