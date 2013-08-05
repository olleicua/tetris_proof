import Data.Map as Map
import Data.List as List
import Data.Ord

data Shape = Shape (Map (Int, Int) ())
  deriving (Eq, Ord)

foo = Shape (Map.fromList
  [ ((0,0), ()) ])

bar = Shape (Map.fromList
  [ ((-2,4), ()), ((-1,3), ()), ((0,2), ()) ])

rowsOrCols :: ((Int, Int) -> Int) -> Shape -> [Int]
rowsOrCols operator (Shape m) =
  [minimum (List.map operator (Map.keys m)) ..
   maximum (List.map operator (Map.keys m))]
rows :: Shape -> [Int]
rows (Shape m) = rowsOrCols fst (Shape m)
cols :: Shape -> [Int]
cols (Shape m) = rowsOrCols snd (Shape m)

neighbors :: (Int, Int) -> [(Int, Int)]
neighbors (row, col) =
  [(row, col + 1), (row, col - 1), (row + 1, col), (row - 1, col)]

validAdditions :: Shape -> [(Int, Int)]
validAdditions (Shape m) =
  List.nub (List.filter (\coord -> not (Map.member coord m))
                        (concat (List.map neighbors (Map.keys m))))

biggerShape :: Shape -> (Int, Int) -> Shape
biggerShape (Shape m) coord =
  Shape (Map.insert coord () m)

rotateCW :: Shape -> Shape
rotateCW (Shape m) =
 Shape (Map.mapKeys (\(row, col) -> (col, -row)) m)

rotations :: Shape -> [Shape]
rotations shape =
  take 4 (iterate rotateCW shape)

-- normalizes with respect to translation but not rotation
translativeNormalize :: Shape -> Shape
translativeNormalize (Shape m) =
  let minRow = (head (rows (Shape m)))
      minCol = (head (cols (Shape m))) in
  Shape (Map.mapKeys (\(row, col) -> (row - minRow, col - minCol)) m)

-- normalize with translation
normalize :: Shape -> Shape
normalize shape =
  minimum (List.map translativeNormalize (rotations shape))

biggerShapes :: [Shape] -> [Shape]
biggerShapes shapes =
  List.nub (concat (List.map (\shape ->
    (List.map (\coord -> normalize (biggerShape shape coord)) (validAdditions shape)))
    shapes))

instance Show Shape where
  show (Shape m) =
    concat (List.map (\row ->
      concat (List.map (\col ->
        if Map.member (row, col) m then "#" else " "
      ) (cols (Shape m))) ++ "\n"
    ) (rows (Shape m)))

search :: Int -> [String]
search squares =
  (List.map show
            ((take squares (iterate biggerShapes
                                  [Shape (Map.fromList [ ((0,0), ()) ])]))
             !! (squares - 1)))

main :: IO ()
main = do
  putStr (concat (List.intersperse "\n\n" (search 8)))
