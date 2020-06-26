export default class {

  /**
   * Salva os dados no armazenamento local do navegador
   * @param key:string cahve de indentificação dos dados
   * @param value:object valor a ser armazenado
   */
  static store(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * Recupera um valor salvo no larmazenamento local
   * @param key:string
   */
  static get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  /**
   * Apaga os dados armazenados na chave especificada
   * @param key:string chave de identificação dos dados
   */
  static delete(key) {
    window.localStorage.removeItem(key)
  }

  /**
   * Valida se uma determinada chave existe
   * @param key:string chave de identificação dos dados
   */
  static exists(key) {
    let storage = JSON.parse(window.localStorage.getItem(key))
    console.log(storage != null)
    if (storage != null)
      return true

    return false
  }
}