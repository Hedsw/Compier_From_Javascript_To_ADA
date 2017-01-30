# Compier_From_Javascript_To_ADA
##Date : 2017 - 01 -29

This project consists of writing a Lexical Analyzer for a subset of the Ada programming language. The Lexical Analyzer is to be a module written in the language of Javascript(NodeJs) that exports the following:

  `procedure GetNextToken   
  global variables Token
      Lexeme
      Value {for integer tokens}
      ValueR {for real tokens}
      Literal {for strings}`

  The following are the reserved workd in the language(may be upper or lower case):

  `BEGIN, MODULE, CONSTANT, PROCEDURE, IS, IF, THEN, ELSE, ESLEIF, WHILE, LOOP, FLOAT, INTEGER, CHAR, GET, PUT, END. `

  The Notation for specifying tokens is as follows:

  `Comments begin with the symbol -- and continue to the end of the line. Comments may appear after any token.
  Blanks between tokens are optional, with the exception of reserved words.
  Reserved words must be separated by blanks, newlines, the beginning of the program or the final semicolon.`

  Token id for indentifiers matches a letter followed by letters, underscore and/or digits having a maximum length of 17 characters. Ada identifiers are not case sensitive.

  `letter -> [a-z, A-Z]
   digit -> [0-9]
   underscore -> _  
   id -> letter(letter|digit|underscore)*`
