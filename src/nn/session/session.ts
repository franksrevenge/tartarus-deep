import { Xoshiro128, Randomizer } from '../../math/randomizer';


export class Session {
  private randomizer: Randomizer;

  public constructor(seed?: string) {
    this.randomizer = new Xoshiro128(seed);
  }


  public random(): number {
    return this.randomizer.random();
  }


  public getRandomizer(): Randomizer {
    return this.randomizer;
  }
}

