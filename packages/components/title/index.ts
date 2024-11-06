import type { App } from 'vue'
import Title from './title.vue'

Title.install = (app: App): void => {
  app.component(Title.name, Title)
}
export const baseTitle = Title
export default Title
