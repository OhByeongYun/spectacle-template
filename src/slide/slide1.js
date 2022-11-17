import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import {
    Slide,
    Notes,
    Heading
} from 'spectacle';
import CodePane from '../component/code-pane/code-pane';

const code = `
// Define interface.
interface API {
    suspend fun run(): Unit
}

// Define interface.
interface API {
    suspend fun run(): Unit
}

// Define interface.
interface API {
    suspend fun run(): Unit
}

// Define interface.
interface API {
    suspend fun run(): Unit
}

// Define interface.
interface API {
    suspend fun run(): Unit
}

// Define interface.
interface API {
    suspend fun run(): Unit
}

// Define interface.
interface API {
    suspend fun run(): Unit
}
`

export default function Slide1() {
    return (
        <Slide backgroundColor="#333">
            <Heading padding={1} >CODE!!</Heading>
            <CodePane
                maxHeight={"50%"}
                theme={theme} 
                language='kotlin' 
                highlightRanges={[
                    [2, 4],
                    [7, 9],
                    [22]
                ]}
                descriptions={[
                    'Interface를 선언합니다.',
                    null,
                    '여기를 주목하세요.'
                ]}
            >
                {code}
            </CodePane>
            <Notes>
                <ul>
                    <li>코드 설명</li>
                    <li>Interface 빠트리지 않고 설명 할 것</li>
                </ul>
            </Notes>
        </Slide>
    );
}
