export function GenerateFactoryProvider(app: any, managers: any) {
  Object.keys(managers).forEach((key) => {
    app.provide(key, managers[key]());
  });
}
