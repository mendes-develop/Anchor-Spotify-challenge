let example = 'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.'


function largestUniqSetOfCharsFrom(paragraph) {

  if (paragraph.length < 50) console.log('There must be at least 50 characters in the paragraph.')
  const uniqChars = [... new Set(example)]
  const maxNumChars = paragraph.length - 50

  return uniqChars.slice(0, maxNumChars)
}

largestUniqSetOfCharsFrom(example)


