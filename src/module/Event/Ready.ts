import Extension from "@/structure/Extension";
import { EventListener } from "@/structure/EventListener";

export default class Ready extends Extension {
  @EventListener({ event: "ready" })
  onEvent() {
    console.log(`Logged `)
  }
}