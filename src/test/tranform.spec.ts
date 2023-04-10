import { test, expect } from "vitest"
import { transformToNode } from "@/core/share/tranformToReactElement"

test('textNode', () => {
    const code = 'asdasdkgjflkd'
    const tokens = document.createTextNode('asdasdkgjflkd')
    expect(transformToNode(code)).toEqual(tokens)
})

test.skip('textNode', () => {
    const code = '('
    const tokens = {
        
    }
    expect(transformToNode(code)).toEqual(tokens)
})
