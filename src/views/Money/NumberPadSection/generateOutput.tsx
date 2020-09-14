//type InputString = '0' | '1' | '2' | '3'| '4' | '5' | '6' | '7' | '8' | '9' | '.' | '删除' | '清空'

const generateOutput = (text:string,output = '0') =>
{
  if (text === '0' || text === '1' || text === '2' || text === '3' || text === '4' || text === '5' || text === '6' || text === '7' || text === '8' || text === '9') {
    if (output === '0') {
      return text;
    }
    else {
      return output + text;
    }
  } else if (text === '删除') {
    if (output.length === 1) {
      return '';
    } else {
      return output.slice(0, -1) || '';
    }
  } else if (text === '清空') {
    return '';
  } else if (text === '.') {
    if (output.indexOf('.') >= 0) {
      return output;
    }
    else {
      return output + '.';
    }
  } else {
    return '';
  }
}

export {generateOutput};