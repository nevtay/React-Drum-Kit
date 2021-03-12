import { useEffect } from "react"

/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to; to be compared against event.key
 * @param {function} action - the action to perform on keypress
 */

export default function useKeypress(key, action) {
  useEffect(() => {
    // * define event listener
    const onKeyup = (e) => {
      if (e.key === key) action()
    }

    // * register event listener
    window.addEventListener("keyup", onKeyup)

    // * unregister event listener
    return () => window.removeEventListener("keyup", onKeyup)
  }, [])
}
