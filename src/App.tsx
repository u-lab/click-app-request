import useSWR from 'swr';
import { fetchApprovalContent } from './service/fetchApprovalContent';

const App = () => {
  // 許可された要望を取得
  const { data } = useSWR('fetchApprovalContent', fetchApprovalContent)

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data)

  return (
    <div className="App" style={{ background: '#F3F3F3' }}>
      <div>
        <div className="py-8" style={{ background: '#FFFFFF' }}>
          <h1 className="text-center text-base font-bold" style={{ color: '#333333' }}>ご意見箱</h1>
        </div>

        <div className="flex justify-center py-8">
          <a className="rounded-full px-8 py-4 hover:shadow-md" style={{ color: '#fff', background: '#726DF0' }} href="https://share.click.gmbh/c9b07a1d-ac34-46f1-90d7-707d9b9cdd5e?locale=ja">
            ご意見はこちらから
          </a>
        </div>

        <div className="pb-8 px-4">
          <h2 className="text-center font-bold pb-8">
            みんなのご意見
          </h2>

          {
            data.map((item, index) => {
              return (
                <div
                  key={`minna-no-contents-${index}`}
                  style={{ maxWidth: '425px', background: '#fff' }}
                  className="mx-auto mb-8 p-4 shadow rounded-md hover:shadow-lg"
                >
                  <div>
                    <p className="font-xs" style={{ color: '#777777' }}>{item.timeStamp.slice(0, 10)}</p>
                  </div>

                  <div className="py-2">
                    <p className="font-sm">{item.contents}</p>
                  </div>

                  <div>
                    <p className="text-right font-xs" style={{ color: '#777777' }}>{`@${item.nickName}`}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
