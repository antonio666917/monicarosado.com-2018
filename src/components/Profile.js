import React from "react";
import styled from "styled-components";

const StyledProfile = styled.div`
  padding: 20px;

  h3 {
    font-weight: bold;
    color: var(--black);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: var(--gray);
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const Profile = () => {
  return (
    <StyledProfile>
      <h3>profile</h3>
      <p>
        passionately driven by the ad life, digital landscape, and emerging
        technologies, i am a professional with 6+ year experience in managing
        clients and products within fortune 500 companies.
      </p>
      <p>
        after a joyful ride across the agency landscape, digital is my dna.
        branding, my true love. social, digital, retail, influencer marketing &
        traditional media also live in my backbone.
      </p>

      <h3>mission</h3>
      <p>
        a new year has come filled with new opportunities and changes — thanks
        for helping in spreading my resumé to hands that can make a difference
        as i look to relocate from miami to california.
      </p>
      <p>
        as a client services lead and a web, digital, social marketing
        professional, i look to share my skills, experience, energy, and spirit
        with a brand i truly admire not only from a user perspective but also
        from a professional one.
      </p>
    </StyledProfile>
  );
};

export default Profile;
