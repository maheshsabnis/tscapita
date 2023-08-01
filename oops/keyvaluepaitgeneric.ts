/* a generic class that will store the data in Key Value Pair 
Multi-Type Generic
*/

class KeyValuePair<K, V> {
  private key: K = null;
  private value: V = null;

  setKeyValue(k: K, v: V): void {
    this.key = k;
    this.value = v;
  }

  display(): void {
    console.log(`Key : ${this.key} and value : ${this.value}`);
  }
}

let kv1 = new KeyValuePair<number, string[]>();
kv1.setKeyValue(1, ["Mahesh", "Tejas", "Jay"]);
kv1.display();
