<script setup lang="ts">
import { computed } from 'vue'
import BaseWindowFrame from '@/components/BaseWindowFrame.vue'

const currentDate = new Date()
const startWorkDate = '2017-01-01'
const yearsOfExperience = computed(() =>
  Math.floor((currentDate.getTime() - new Date(startWorkDate).getTime()) / (1000 * 60 * 60 * 24 * 365))
)
</script>

<template>
  <div class="about-page">
    <div class="page-container">
      <div class="page-header">
        <h1>About Me</h1>
        <p class="subtitle">Software Engineer | Tech Speaker | Cybersecurity Enthusiast</p>
      </div>

      <base-window-frame
        title="Professional Background"
        subtitle="Experience & Expertise"
        variant="elevated"
        color="primary"
        padding="lg"
        class="about-card"
      >
        <div class="content-section">
          <h3>Current Role</h3>
          <p>
            I am a Software Engineer at Maersk, based in Copenhagen, Denmark, with over
            {{ yearsOfExperience }} years of experience in the IT industry. Since 2017, I have worked as
            a Frontend Web Developer, primarily using frameworks such as Angular and Vue.
          </p>
        </div>

        <div class="content-section">
          <h3>Key Projects & Contributions</h3>
          <p>
            Working alongside agile teams, I've engaged in a variety of exciting projects, including the development of
            quote and booking applications, dashboards, and the integration of Bing Maps for container and ship
            tracking. Currently, I am involved in building quote and booking systems for Maersk Air and LCL cargo, where
            I have played a significant role in migrating to Vue 3 and TypeScript. I have also contributed to the
            creation of shared design system components and improved automation workflows and libraries.
          </p>
        </div>

        <div class="content-section">
          <h3>Technical Skills</h3>
          <p>
            I am skilled in tools such as Cypress, Jest, and Vitest
            for testing, as well as GitHub Actions for CI/CD. I have hands-on experience with modern
            frontend frameworks and a strong focus on code quality and best practices.
          </p>
        </div>

        <div class="content-section">
          <h3>Community & Leadership</h3>
          <p>
            I have acted as a Frontend Developer Community Host and Coordinator for company events. I am passionate
            about secure coding practices and am a member of the
            Cybersecurity Champions group at Maersk. I have participated as a speaker at conferences
            and meetups, discussing frontend technologies and security best practices.
          </p>
        </div>
      </base-window-frame>

      <base-window-frame
        title="Certifications & Education"
        subtitle="Professional Credentials"
        variant="elevated"
        color="success"
        padding="lg"
        class="about-card"
      >
        <div class="credentials-grid">
          <div class="credential-item">
            <div class="credential-icon">🔐</div>
            <div class="credential-details">
              <h4>ISC2 Certified in Cybersecurity</h4>
              <p>(CC) Credential</p>
            </div>
          </div>

          <div class="credential-item">
            <div class="credential-icon">🛡️</div>
            <div class="credential-details">
              <h4>CompTIA Security+</h4>
              <p>CE Certification</p>
            </div>
          </div>
        </div>
      </base-window-frame>

      <base-window-frame
        title="Beyond the Office"
        subtitle="Passion & Purpose"
        variant="elevated"
        color="secondary"
        padding="lg"
        class="about-card"
      >
        <div class="content-section">
          <p>
            In addition to my professional work, I am a
            <a href="https://dev.to/ms_74" target="_blank" class="inline-link">tech blogger</a>, sharing my expertise
            and insights on Dev.to to inspire and educate others. I actively participate in the tech community as a
            <a href="https://sessionize.com/MariamReba/" target="_blank" class="inline-link">conference speaker</a>,
            discussing emerging technologies and cybersecurity best practices.
          </p>

          <p>
            My ultimate goal is to create innovative, secure, and reliable solutions that positively impact businesses
            and communities. Through my efforts, I strive to improve lives and elevate the industry as a whole.
          </p>
        </div>
      </base-window-frame>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--color-background);
  padding: var(--spacing-2xl) var(--spacing-xl);
}

.page-container {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0 0 var(--spacing-md) 0;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.about-card {
  margin-bottom: var(--spacing-2xl);
}

.content-section {
  margin-bottom: var(--spacing-lg);
}

.content-section:last-child {
  margin-bottom: 0;
}

.content-section h3 {
  font-size: 1.25rem;
  color: var(--color-heading);
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-border);
}

.content-section p {
  margin: 0 0 var(--spacing-md) 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
}

.content-section p strong {
  color: var(--color-primary);
  font-weight: 600;
}

.credentials-grid {
  display: grid;
  gap: var(--spacing-lg);
}

.credential-item {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background-soft);
  transition: all var(--transition-fast);
}

.credential-item:hover {
  border-color: var(--color-primary);
  background: var(--color-background-mute);
  transform: translateY(-2px);
}

.credential-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.credential-details h4 {
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 1.0625rem;
  color: var(--color-heading);
}

.credential-details p {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
}

.inline-link {
  color: var(--color-primary);
  font-weight: 600;
  transition: color var(--transition-fast);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 4px;
}

.inline-link:hover {
  color: var(--color-primary-hover);
  text-decoration-color: currentColor;
}

@media (max-width: 640px) {
  .about-page {
    padding: var(--spacing-xl);
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.0625rem;
  }

  .content-section h3 {
    font-size: 1.125rem;
  }

  .content-section p {
    font-size: 0.9375rem;
  }

  .credential-icon {
    font-size: 2rem;
  }
}
</style>
