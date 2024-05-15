<template>
  <main>
    <SectionLayout>
      <SignUpForm />
    </SectionLayout>
  </main>
</template>

<script>
import SectionLayout from '@/layouts/SectionLayout.vue'
import SignUpForm from '@/components/SignUpForm.vue'

export default {
  name: 'SignUpView',
  components: {
    SectionLayout,
    SignUpForm
  }
}
</script>

