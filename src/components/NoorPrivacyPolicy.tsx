import React from 'react';
import styled from 'styled-components';

const Page = styled.main`
  max-width: 760px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
  color: #1a1a1a;
  line-height: 1.65;
`;

const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
`;

const Meta = styled.p`
  color: #777;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e6e6e6;
`;

const Heading = styled.h2`
  font-size: 1.2rem;
  margin: 2rem 0 0.6rem;
`;

const Text = styled.p`
  color: #555;
`;

const List = styled.ul`
  padding-left: 1.2rem;
  color: #555;
`;

const Link = styled.a`
  color: #667eea;
`;

const NoorPrivacyPolicy: React.FC = () => {
  return (
    <Page>
      <Title>Noor Privacy Policy</Title>
      <Meta>
        Effective date: October 3, 2026
        <br />
        App: Noor (Android)
        <br />
        Developer: Bilal Mahmood
        <br />
        Package: com.ghostinthetoast.noor
      </Meta>

      <Text>
        This policy applies to the Noor mobile application. It explains what
        information the app uses, why it is used, and how it is stored. Noor is
        a prayer-times and azaan utility. It does not require an account.
      </Text>

      <Heading>Information the app uses</Heading>
      <List>
        <li>
          <strong>Approximate and precise location.</strong> Used only to
          calculate local prayer times and to show a nearby city name. If
          location permission is denied or unavailable, the app falls back to
          Makkah coordinates.
        </li>
        <li>
          <strong>App settings.</strong> Prayer-calculation method, Asr method,
          and the last location used for scheduling are stored on the device.
        </li>
        <li>
          <strong>Notifications and exact alarms.</strong> Used to play the
          azaan at scheduled prayer times, including after the device restarts.
        </li>
      </List>

      <Heading>How information is stored</Heading>
      <Text>
        Location coordinates and settings are stored locally on your device
        (Android SharedPreferences). Noor does not operate its own servers and
        does not create a user account, profile, or cloud backup of this data.
      </Text>

      <Heading>Third parties</Heading>
      <Text>
        Reverse geocoding (turning coordinates into a city name) may use Google
        Play services / the Android geocoder. That request is limited to
        resolving a place name for display. Noor does not include ads, analytics
        SDKs, crash reporters, or social-login SDKs.
      </Text>
      <Text>
        If you install Noor from Google Play, Google also processes install and
        store data under{' '}
        <Link href="https://policies.google.com/privacy">
          Google’s privacy policy
        </Link>
        .
      </Text>

      <Heading>What we do not do</Heading>
      <List>
        <li>We do not sell your data.</li>
        <li>We do not use your location for advertising.</li>
        <li>
          We do not share your location with other apps or companies for their
          marketing.
        </li>
      </List>

      <Heading>Your choices</Heading>
      <List>
        <li>
          Deny or revoke location permission in Android settings. The app will
          use the Makkah fallback.
        </li>
        <li>
          Disable notifications or exact-alarm permission. Prayer alerts will
          not fire.
        </li>
        <li>
          Uninstall the app to remove locally stored settings and location.
        </li>
      </List>

      <Heading>Children</Heading>
      <Text>
        Noor is not directed at children under 13. We do not knowingly collect
        personal information from children.
      </Text>

      <Heading>Changes</Heading>
      <Text>
        If this policy changes, the updated version will be posted at this same
        URL with a new effective date.
      </Text>

      <Heading>Contact</Heading>
      <Text>
        Questions about this policy or Noor’s data practices:{' '}
        <Link href="mailto:bmood1@gmail.com">bmood1@gmail.com</Link>
      </Text>
    </Page>
  );
};

export default NoorPrivacyPolicy;
