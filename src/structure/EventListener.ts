export const EventListener = ({ event }: { event: string }): PropertyDecorator => (target, key) => {
  if (key.toString() !== "onEvent") throw new Error("Invaild method name.");
}
