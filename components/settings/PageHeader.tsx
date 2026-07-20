export interface PageHeaderProps {
  username: string;
  lastUpdated: string;
  createdOn: string;
}

export default function PageHeader({username, lastUpdated, createdOn}: PageHeaderProps){
    return (
<div className="mb-4">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      <p className="mt-1 text-xs text-gray-500">
        {username} &nbsp;|&nbsp; Last Updated :{" "}
        <span className="font-medium text-gray-600">{lastUpdated}</span> &nbsp;|&nbsp; Created On :{" "}
        <span className="font-medium text-gray-600">{createdOn}</span>
      </p>
      <div className="mt-3 border-b border-gray-100" />
    </div>
    );
}