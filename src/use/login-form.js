import { computed, watch } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm () {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting, submitCount } = useForm()

  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Пожалуйста, введите Email')
      .email('Необходимо ввести корректный Email')
  )

  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Пожалуйста, введите пароль')
      .min(6, 'Пароль не может быть меньше 6 символов')
  )

  const isTooManyAttemts = computed(() => {
    return submitCount.value >= 3
  })

  watch(isTooManyAttemts, (val) => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0
      }, 60000)
    }
  })

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch('auth/login', values)
      router.push('/')
    } catch (e) {
    }
  })

  return {
    email,
    password,
    eError,
    pError,
    isSubmitting,
    isTooManyAttemts,
    eBlur,
    pBlur,
    onSubmit
  }
}
