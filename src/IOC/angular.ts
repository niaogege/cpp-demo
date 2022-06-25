export class Container {
  addProvider<T>(provider: Provider<T>){}
  inject<T>(type: Token<T>) {}
}

interface Type<T> extends Function {
  new (...args: any[]): T;
} 
class InjectToken {
  constructor(public injectionIdentifier: string) {}
}

type Token<T> =  Type<T> | InjectToken;

export type Factory<T> = () => T
interface BaseProvider<T> {
  provide: Token<T>
}

interface ClassProvider<T> extends BaseProvider<T> {
  provide: Token<T>;
  useClass: Type<T>;
}

interface ValueProvider<T> extends BaseProvider<T> {
  provide: Token<T>;
  useValue: T;
}

interface FactoryProvider<T> extends BaseProvider<T> {
  provide: Token<T>;
  useFactory: Factory<T>;
}
type Provider<T> = ClassProvider<T> | ValueProvider<T> | FactoryProvider<T>;

// provider.ts
export function isClassProvider<T>(
  provider: BaseProvider<T>
): provider is ClassProvider<T> {
  return (provider as any).useClass !== undefined;
}

export function isValueProvider<T>(
  provider: BaseProvider<T>
): provider is ValueProvider<T> {
  return (provider as any).useValue !== undefined;
}

export function isFactoryProvider<T>(
  provider: BaseProvider<T>
): provider is FactoryProvider<T> {
  return (provider as any).useFactory !== undefined;
}
