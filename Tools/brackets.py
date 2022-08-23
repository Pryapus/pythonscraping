
def GetBracketContent(string, openingbracket, closingbracket ):
    stack = 0
    startIndex = None
    results = []

    for i, c in enumerate(string):
        if c == openingbracket:
            if stack == 0:
                startIndex = i #+ 1 string to extract starts one index later

        # push to stack
            stack += 1
        elif c == closingbracket:
        # pop stack
            stack -= 1

            if stack == 0:
                results.append(string[startIndex:i])

    print(results[0] + closingbracket)

