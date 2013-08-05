tetris_proof
============

An exercise in find tetris shapes

Running the Haskell version:

    $ ghci shapes.hs
    *Main> putStr (showShapes (search 1))
    #
    *Main> putStr (showShapes (search 1))
    #
    *Main> putStr (showShapes (search 2))
    ##
    *Main> putStr (showShapes (search 3))
    ###
    
    
    ##
    #
    *Main> putStr (showShapes (search 3\))
    
    <interactive>:7:29: parse error on input `\'
    *Main> putStr (showShapes (search 4))
    ####
    
    
    ###
    #
    
    
    ###
      #
    
    
    ###
     #
    
    
    ##
    ##
    
    
    ##
     ##
    
    
    #
    ##
     #
